define({ "api": [
  {
    "type": "post",
    "url": "/api/auth/login",
    "title": "Login Owner",
    "name": "LoginOwner",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username, needs to be unique.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password, required.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "successful response: ",
          "content": "http/1.1 201 Created\n{\n  \"message\": \"Welcome test\",\n  \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNTgwNTk2NTgxLCJleHAiOjE1ODEyMDEzODF9.dCjB70A25ZCa7wmXhUAtoGKCtFESP8g-BRgdhw6jgG4\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./auth/auth-router.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/api/auth/register",
    "title": "Register Owner",
    "name": "RegisterOwner",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username, needs to be unique.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password, required.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "successful response: ",
          "content": "http/1.1 201 Created\n{\n  \"id\": 4,\n  \"username\": \"test\",\n  \"password\": \"$2a$08$6fu3MlbA4mXGegw3h.m5eegLbRmG7KxkuplTA5lMLWa7shdXZMKYu\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./auth/auth-router.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "delete",
    "url": "/api/gadgets/:gadgetId",
    "title": "DELETE gadget",
    "name": "DELETE_Gadget",
    "group": "Gadgets",
    "success": {
      "examples": [
        {
          "title": "successful response: ",
          "content": "http/1.1 200 OK\n\n{\n    \"message\": \"Gadget deleted. Good job.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Not Found\n{\n  \"error\": \"Error deleting gadget\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./gadgets/router.js",
    "groupTitle": "Gadgets"
  },
  {
    "type": "get",
    "url": "/api/gadgets",
    "title": "GET gadgets",
    "name": "GET_Gadgets",
    "group": "Gadgets",
    "success": {
      "examples": [
        {
          "title": "successful response: ",
          "content": "http/1.1 200 OK\n\n [\n    {\n        \"id\": 1,\n        \"owner_id\": 1\n        \"name\": \"Camera\",\n        \"price\": 20,\n        \"location\": \"LA\"\n    },\n    {\n        \"id\": 1,\n        \"owner_id\": 1,\n        \"name\": \"Laptop\",\n        \"price\": 40,\n        \"location\": \"Atlanta\"\n    },\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"Could not retrieve the gadgets from the database\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./gadgets/router.js",
    "groupTitle": "Gadgets"
  },
  {
    "type": "get",
    "url": "/api/gadgets/:gadgetsId",
    "title": "GET  gadgets by ID",
    "name": "GET_Gadgets_by_ID",
    "group": "Gadgets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username, required.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password, required.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "successful response: ",
          "content": "http/1.1 200 OK\n\n [\n    {\n        \"id\": 1,\n        \"owner_id\": 1,\n        \"name\": \"Camera\",\n        \"price\": 50,\n        \"location\": \"LA\"\n    }\n    \n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"No gadget with that ID\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./gadgets/router.js",
    "groupTitle": "Gadgets"
  },
  {
    "type": "get",
    "url": "/api/gadgets/:id/gadgets",
    "title": "GET owners gadgets",
    "name": "GET_Gadgets_by_owner",
    "group": "Gadgets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username, required.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password, required.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "successful response: ",
          "content": "http/1.1 200 OK\n\n [\n    {\n        \"id\": 1,\n        \"name\": \"Camera\",\n        \"price\": 20,\n        \"location\": \"LA\"\n        \"owner_id\": 1\n        \"username\": \"user1\",\n    },\n    {\n        \"id\": 1,\n        \"name\": \"Laptop\",\n        \"price\": 40,\n        \"location\": \"Atlanta\"\n        \"owner_id\": 1,\n        \"username\": \"user1\"\n    },\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"No gadgets to display\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./gadgets/router.js",
    "groupTitle": "Gadgets"
  },
  {
    "type": "post",
    "url": "/api/gadgets/:ownerId",
    "title": "POST new gadget",
    "name": "POST_Gadget",
    "group": "Gadgets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "owner_id",
            "description": "<p>, required</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of gadget, required.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "price",
            "description": "<p>price of gadget.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>location of gadget</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "successful response: ",
          "content": "http/1.1 201 Created\n\n [\n    {\n    \"gadgetData\": {\n    \"owner_id\": 1,\n    \"name\": \"Laptop\",\n    \"price\": 75,\n    \"location\": \"Atlanta\"\n    }\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Not Found\n{\n  \"error\": \"Failed to add new gadget\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./gadgets/router.js",
    "groupTitle": "Gadgets"
  },
  {
    "type": "put",
    "url": "/api/gadgets/:ownerId",
    "title": "PUT update gadget",
    "name": "PUT_Gadget",
    "group": "Gadgets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of gadget, required.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "price",
            "description": "<p>of gadget.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>location of gadget.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "successful response: ",
          "content": "http/1.1 200 Created\n\n [\n    {\n    \"id\": 10,\n    \"owner_id\": 1,\n    \"name\": \"Camera\",\n    \"price\": 10,\n   \n    \"location\": \"Austin\",\n    \n}\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./gadgets/router.js",
    "groupTitle": "Gadgets"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./docs/main.js",
    "group": "e:\\Users\\Robert\\Desktop\\React Projects\\Backend\\Backend\\docs\\main.js",
    "groupTitle": "e:\\Users\\Robert\\Desktop\\React Projects\\Backend\\Backend\\docs\\main.js",
    "name": ""
  }
] });
