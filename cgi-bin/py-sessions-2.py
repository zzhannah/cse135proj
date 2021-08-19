#!/usr/bin/python

# Import modules for CGI handling 
import cgi, cgitb, os, sys, requests
from bs4 import BeautifulSoup
form = cgi.FieldStorage()
print ("Content-type:text/html\r\n\r\n")
print ("<html>")
print ("<head>")
print ("<title>Python Session Page 2</title>")
print ("</head>")
print ("<body>")
print ("<h1 align='center'>Python Session Page 2</h1><hr>")

r = requests.get('https://cse135proj.site/cgi-bin/py-sessions-1.py')
html_bytes = r.text
soup = BeautifulSoup(html_bytes)
hidden = soup.find_all('input', type="hidden")
for tag in hidden_tags:
   name = tag.name

if name:
    namme = name
else:
    namme = "You do not have a name set"
    
print ("<form action=/cgi-bin/py-sessions-2.py' method='Post' id='form'>")
print ("<input type='hidden' name='name' value='"+ namme + "'/>")
print ("</form>")
print ("<p><b>Name: </b>"+ namme + "</p>")

print ("<a href='/py-cgiform.html'>CGI Form</a><br>")
print ("<a href='/cgi-bin/py-sessions-1.py'>Session Page 1</a><br>")
print ("<a href='/cgi-bin/py-destroy-session.py'>Destroy Session</a>")
print ("</body>")
print ("</html>")

