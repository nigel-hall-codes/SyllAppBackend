# SyllAppBackend

To use backend:
  Use terminal to navigate to directory that holds the manage.py file
  Into the console type --> python manage.py runserver 
      This runs the backend on your localhost which you can access through "127.0.0.1:8000" on your browser
  Then download ngrok
      This allows gives you a live web address that links to your local host
  Follow ngrok tutorials to get it up and running... Make sure port is the same!  Port = the '8000' in '127.0.0.1:8000'
  ngrok will then show you a web address that looks like 'http://a5452a51.ngrok.io'
  Finally you can access API by making POST request to '{{ your ngrok url }}/api/'
    In POST request send data that looks like this --> {'text': returnedTesseractText}
    
