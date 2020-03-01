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
    "version": "0.0.0",
    "filename": "./gadgets/router.js",
    "groupTitle": "Gadgets"
  },
  {
    "type": "get",
    "url": "/api/gadgets/:ownerId",
    "title": "GET owners gadgets",
    "name": "GET_Gadgets",
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
          "content": "http/1.1 200 OK\n\n [\n    {\n        \"id\": 1,\n        \"owner_id\": 1,\n        \"renter_id\": 1,\n        \"name\": \"Camera\",\n        \"price\": 20,\n        \"location\": \"LA\"\n    },\n    {\n        \"id\": 2,\n        \"owner_id\": 1,\n        \"renter_id\": 2,\n        \"name\": \"Laptop\",\n        \"price\": 75,\n        \"location\": \"Atlanta\"\n    },\n]",
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
          "content": "http/1.1 201 Created\n\n [\n    {\n    \"id\": 10,\n    \"owner_id\": 1,\n    \"name\": \"Laptop\",\n    \"price\": 75,\n    \n    \"location\": \"Atlanta\"\n    }\n]",
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
  }
] });
