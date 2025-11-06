package com.spring.friendfinder.model;

import com.spring.friendfinder.enums.Gender;

import java.util.*;
import java.util.Date;

public class User {
    private int userId;
    private String username;
    private String password;
    private String firstName;
    private String lastName;
    private String phone;
    private String address;
    private String city;
    private Date birthDate;
    private String email;

    private Gender gender ;
    private List<Post> posts;
    private List<Friend> friends;

}
