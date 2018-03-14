import requests, json, base64
import os

baseUrl = "https://localhost/datawarehuse/api/apps/rbcnew/index.html"
'''baseUrl = "http://localhost:8181/dhis/api/dataStore/rbcdashboard/"'''
'''baseUrl = '''"https://dhis2.jsi.com/dss/api/dataStore/rbcdashboard/"'''
status = 200

def post_payload(jsonPayload):
    print('Running file : '+jsonPayload)
    strlog = ('%s:%s' % ('amza', 'district'))
    base64string = base64.b64encode(bytes(strlog, 'ascii'))
    headers = {"Authorization": "Basic %s" % base64string.decode('utf-8'), 'Accept' : 'application/json', "Content-Type": "application/json"}
    payLoad = json.load(open('resources/'+jsonPayload, 'r'))
    #print(payLoad)
    baseFileName = base = os.path.basename(jsonPayload)
    dashboard = os.path.splitext(baseFileName)[0]
    url = baseUrl+dashboard
    req = requests.post(url, data=json.dumps(payLoad), headers=headers)

    if status == req.status_code:
        print(str(status)+': '+dashboard+' has been created succesfully in datastore')
    else:
        req = requests.put(url, data=json.dumps(payLoad), headers=headers)
        print(str(req.status_code)+': '+dashboard + ' has been updated succesfully in datastore')

def list_directory_files(path):
    dirs = os.listdir(path)
    for file in dirs:
        print('Posting Payload '+file)
        post_payload(file)

if __name__ == "__main__":
    cwd = os.getcwd()
    list_directory_files(cwd+'/resources')
