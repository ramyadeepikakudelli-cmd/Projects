#include <iostream>
#include <string>
using namespace std;

struct Student {
    string name;
    string roll;
    int age;
    string address;
    float cgpa;
    string contact;
    string gender;
    string dob;
    string Branch;
    char  Section;
};

Student students[10] = {

    {"Sree Nanda Sai", "AP24110011861", 18, "Bangalore", 8.24, "9392149774", "Male", "14/09/2006", "CSE","K"},
    {"Sree Nanda Sai", "AP24110011861", 18, "Bangalore", 8.24, "9392149774", "Male", "14/09/2006", "CSE","K"},
    {"Sujatha", "AP24110011812", 18, "Thadikonda", 8.5, "9876543210", "Female", "01/01/2006", "CSE","K"},
    {"Poojitha", "AP24110011819", 18, "Guntur", 8.7, "9087654321", "Female", "01/01/2006", "CSE","K"},
    {"Ramya", "AP24110011841", 18, "Vizag", 9.0, "9123456856", "Female", "01/01/2006", "CSE","K"},
    {"Sai Sri Ram", "AP24110011872", 19, "Vijayawada", 8.9, "9012345678", "Male", "05/06/2005", "CSE","K"},
    {"Kiran Kumar", "AP24110011833", 19, "Hyderabad", 8.1, "9876501234", "Male", "22/03/2005", "CSE","K"},
    {"Anusha Reddy", "AP24110011827", 18, "Tenali", 9.2, "9345678123", "Female", "18/11/2006", "CSE","K"},
    {"Chaitanya", "AP24110011805", 19, "Kakinada", 7.9, "9008765432", "Male", "09/07/2005", "CSE","K"},
    {"Harika", "AP24110011856", 18, "Nellore", 8.6, "9812345670", "Female", "12/12/2005", "CSE","K"},
    {"Rohit", "AP24110011890", 19, "Rajahmundry", 8.3, "9098765432", "Male", "25/08/2005", "CSE","K"}
};

int main(int argc, char* argv[]) {
    if (argc < 3) {
        cout << "ERROR";
        return 0;
    }

    string name = argv[1];
    string roll = argv[2];

    for (int i = 0; i < 10; i++) {
        if (students[i].name == name && students[i].roll == roll) {
            cout << students[i].name << "|"
                 << students[i].roll << "|"
                 << students[i].age << "|"
                 << students[i].address << "|"
                 << students[i].cgpa << "|"
                 << students[i].contact << "|"
                 << students[i].gender << "|"
                 << students[i].dob <<"|"
                 <<students[i].Branch << "|"
                    <<students[i].Section;

            return 0;
        }
    }

    cout << "NOT_FOUND";
    return 0;
}
