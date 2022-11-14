import requests
from requests.structures import CaseInsensitiveDict
from datetime import datetime
import time
from datetime import timedelta
import os
import yaml
import urllib.parse

# ---------------------------------------------------------------------------------------ALL NEEDED DATA----------------------------------------------------------------------------------------------------------------
startdate = (datetime.today() - timedelta(days = 1)).strftime("%d/%m/%Y")
enddate = datetime.today().strftime("%d/%m/%Y") 
start_time = (datetime.now() - timedelta(minutes = 30)).strftime('%H:%M')
end_time= (datetime.now() - timedelta(minutes = 30)).strftime('%H:%M')
# start_time="09:00"
# end_time="09:00"
Table_Name="Range : "+startdate+" "+start_time +" to "+enddate+" "+end_time
print(Table_Name)

if(os.path.isfile('config.yml')):
    config=yaml.safe_load(open("config.yml"))
else:
    print("File is Not Found in Your Directory")

channelName=config['channelName']
orgDetails =config['orgDetails']
apiListforGetMethod=config['apiListforGetMethod'] 
apiListforPostMethod=config['apiListforPostMethod']
apiListforPutMethod=config['apiListforPutMethod']
# ---------------------------------------------------------------------------------------DECLARATIONS-----------------------------------------------------------------------------------------------------------------
class datas: 
        def __init__(self,orgName,path,noOfApiCalls,maxTimeTaken,avgTimeTaken,minTimeTaken): 
            self.orgName=orgName
            self.path=path
            self.noOfApiCalls=noOfApiCalls
            self.maxTimeTaken = maxTimeTaken
            self.avgTimeTaken = avgTimeTaken
            self.minTimeTaken = minTimeTaken

wholeList=[]
rows1=[]
rows2=[]
rows=[]
orgDc=""
# ---------------------------------------------------------------------------------FOR GETTING AN ACCESS TOKEN------------------------------------------------------------------------------------------------------------

# for Getting an AccessToken for logs
def logsaccess_Token():
  url = 'https://accounts.zoho'+orgDc+'/oauth/v2/token'
  if(orgDc==".com"):
    param = config['paramforlogs(US)']
  if(orgDc==".in"):
    param = config['paramforlogs(IN)']
  logsaccessToken=(requests.post(url, data = param)).json()
  return logsaccessToken['access_token']
  

# ---------------------------------------------------------------------------------REQUEST API CALLS FOR GET AND POST----------------------------------------------------------------------------------------------



# for Searching the Given Query and Get the Response
def Search(searchaccessQuery,org):                     
        accessurl = 'https://logs.zoho'+orgDc+'/search?service=Expense&fromDateTime='+startdate+' '+start_time+'&toDateTime='+enddate+' '+end_time+'&timezone=Asia/Kolkata&order=desc&range=1-500&appid='+org['appId']+'&query='+str(searchaccessQuery)
        headers = CaseInsensitiveDict()
        headers['Accept'] = 'application/json'
        headers['Authorization'] = 'Bearer '+ logsaccessToken 
        resp = requests.get(accessurl, headers=headers)
        response_data = resp.json()
        return response_data



# # Post the Table data to the Cliq channel
def Export(CliqaccessToken,rows1,rows2):
  accessurl="https://cliq.zoho.com/api/v2/channelsbyname/"+channelName+"/message"
  headers = CaseInsensitiveDict()
  headers['Authorization'] = 'Bearer '+ CliqaccessToken
  headers['method']='POST'
  if(rows1):
        data ={
                "text": "Logs Data",
                "card": {
                    "title":"Performance Monitor",
                    "theme": "modern-inline",
                },
                "slides": [
                    {
                        "type": "table",
                        "title": Table_Name,
                        "data": {
                            "headers": [
                            "Org Name",
                            "API",
                            "No Of Calls (>Avg)",
                            "Max Time",
                            "Avg Time",
                            "Min Time",
                            ],
                            "rows": rows1
                            
                        }
                    }
                ]
        }
        response = requests.post(accessurl, headers=headers, json=data)
  if(rows2):
        data ={
                "text": "Logs Data",
                "card": {
                    "title":"Performance Monitor",
                    "theme": "modern-inline",
                },
                "slides": [
                    {
                        "type": "table",
                        "title": Table_Name,
                        "data": {
                            "headers": [
                            "Org Name",
                            "API",
                            "No Of Calls (>Avg)",
                            "Max Time",
                            "Avg Time",
                            "Min Time",
                            ],
                            "rows": rows2
                            
                        }
                    }
                ]
        }
        response = requests.post(accessurl, headers=headers, json=data)



# ------------------------------------------------------------------------------------RESPONSE FOR THE GIVEN API CALLS(PROCESS)---------------------------------------------------------------------------------------------------------------------------------------

def Process(org,query,method):
    print(api['API_EndPoint'])
    if api['API_EndPoint']=="/api/v1/autocomplete/":
          searchaccessQuery='logtype="access"  and zoid=\"'+org['Id']+ '\" and  path contains \"'+query+ '\" and method=\"'+method+'\" max(time_taken) avg(time_taken) min(time_taken)'
    else:
          searchaccessQuery='logtype="access"  and zoid=\"'+org['Id']+ '\" and  path=\"'+query+ '\" and method=\"'+method+'\" max(time_taken) avg(time_taken) min(time_taken)'
    
    final_data=Search(searchaccessQuery,org)
    print(searchaccessQuery)
    if final_data['_zlf_numFound']!='Total messages matched: 0':
            j=len(final_data['tableValues'])-1
            path=str(api['API_EndPoint'])
            path=path.replace('/api/v1', method+" ")
            noOfApiCalls=final_data['numFound']
            maxTimeTaken=(final_data['tableValues'][j]['max(time_taken)']/1000)
            avgTimeTaken=final_data['tableValues'][j]['avg(time_taken)']
            minTimeTaken=(final_data['tableValues'][j]['min(time_taken)']/1000)
            if api['API_EndPoint'] =="/api/v1/autocomplete/":
                searchaccessQuery='logtype="access" and zoid=\"'+org['Id']+ '\" and  path contains \"'+query+ '\" and method=\"'+method+'\" and time_taken>"%d"' %round(avgTimeTaken)
            else:
                searchaccessQuery='logtype="access" and zoid=\"'+org['Id']+ '\" and  path=\"'+query+ '\" and method=\"'+method+'\" and time_taken>"%d"' %round(avgTimeTaken)
            print(searchaccessQuery)
            time.sleep(2)
            data=Search(searchaccessQuery,org)
            greaterAvg=data['numFound']
            percentage=round((greaterAvg/noOfApiCalls)*100,1)
            avgTimeTaken=(avgTimeTaken/1000)
            noOfApiCalls=str(noOfApiCalls)+" ("+str(greaterAvg)+" - "+str(percentage)+"% )"
            list.append(datas(org['Name'],path,noOfApiCalls,maxTimeTaken,avgTimeTaken,minTimeTaken))


for org in orgDetails:
    list=[]
    orgDc=org['DC']
    logsaccessToken=str(logsaccess_Token())
    #  for Processing an GET Method with a particular API's
    for api in apiListforGetMethod:
        query=urllib.parse.quote(api['API_EndPoint'])
        Process(org,query,"GET")
        time.sleep(2)     

    # for Processing an POST Method with a particular API's
    for api in apiListforPostMethod:
        query=urllib.parse.quote(api['API_EndPoint'])
        Process(org,query,"POST")
        time.sleep(2)
    
    # for Processing an POST Method with a particular API's
    for api in apiListforPutMethod:
        query=urllib.parse.quote(api['API_EndPoint'])
        Process(org,query,"PUT")
        time.sleep(2)

    wholeList.append(list) 


# for Getting an AccessToken for Cliq
def Cliqaccess_Token():
  print("I'm Here")
  url = 'https://accounts.zoho.com/oauth/v2/token'
  param = config['paramforcliq']
  Cliqaccesstoken = (requests.post(url, data = param)).json()
  return Cliqaccesstoken['access_token']

CliqaccessToken = str(Cliqaccess_Token())


# for passing as a rows of an table (GET&POST method API Calls)
for list in wholeList:
    for obj in list:
        if(obj.orgName !="JK" and obj.orgName !="ML"):
            row={
                "Org Name":obj.orgName,
                "API":obj.path,
                "No Of Calls (>Avg)":obj.noOfApiCalls,
                "Max Time":str(round(obj.maxTimeTaken,2))+"s",
                "Avg Time":str(round(obj.avgTimeTaken,2))+"s",
                "Min Time":str(round(obj.minTimeTaken,2))+"s"
            }
            rows1.append(row)
        else:
            row={
                "Org Name":obj.orgName,
                "API":obj.path,
                "No Of Calls (>Avg)":obj.noOfApiCalls,
                "Max Time":str(round(obj.maxTimeTaken,2))+"s",
                "Avg Time":str(round(obj.avgTimeTaken,2))+"s",
                "Min Time":str(round(obj.minTimeTaken,2))+"s"
            }
            rows2.append(row)



Export(CliqaccessToken,rows1,rows2)

# ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

print("ALL LOGS DETAILS ARE GETTING AND POSTING SUCCESSFULLLY!!!!!!!")
