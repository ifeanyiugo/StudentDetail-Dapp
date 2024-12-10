// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;


contract StudentDetail {

    string fullName;
    string schoolName;
    string countryName;

function studentName(string memory _firstName, string memory _lastName) public   returns(string memory){

require(bytes(_firstName).length > 0, "First name must not be empty");
 require(bytes(_lastName).length > 0, "Last name must not be empty");

   fullName = string(abi.encodePacked(_firstName, " ", _lastName)); return fullName;

}

// function that sets and returns the name of school
function school(string memory _schoolName) public returns (string memory){
    schoolName = _schoolName;
    return schoolName;
}


// function that sets and returns the country
function country(string memory _countryName) public returns (string memory){
    countryName = _countryName;
    return countryName;
}


//  Get functions
function getStudentName() public view returns(string memory){
    return fullName;
}

function getSchool() public view returns(string memory) {
    return schoolName;
}

function getCountry() public view returns (string memory) {
    return countryName;
}


}