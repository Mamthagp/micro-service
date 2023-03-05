* there is a input field on the UI and then there is a button
* there are 2 backend APIs ( i.e., 2 servers running behind backend )
* 2 servers we need with different port number
* 2 databases needed according to those servers
* In DB1, there is an user information and in DB2, there is an user detail information
    - In DB1, users collection which will be an array of collection. [{_id : 1, code : 'dct123', name : 'user1'}, {_id : 2, code : 'dct124', name : 'user2'}, ...]
    - In server1 there will be user controller and user model
    - Every user will have an ID, code, name
* On UI user will enter the code and hit search button then it will go to backend.
    - in backend it will search the code based on the code which he entered on the UI
    - And in the 1st server only user info will present but in the 2nd server user's detail will be present.
    - when u enter code then we have to display the below things : 
        - name
        - city
        - age
    - name is from server1 and age, city come from server2.
* Task is : 
    - we need to make an API call to the backend there will be one server it talks to db and finds the user record.
    - once we get the user info in 1st server using the userId make an API call to the 2nd server by passing userId and get the user details.
