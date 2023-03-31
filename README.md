# Car-Insurance
Run this sql script in your terminal or in your database architects visual tool (e.g - Mysql Workbrench) to create the required tables

CREATE TABLE car (
    car_id INT PRIMARY KEY,
    make VARCHAR(255) NOT NULL,
    model VARCHAR(255) NOT NULL,
    year INT NOT NULL,
    engine_no VARCHAR(255) NOT NULL,
    chassis_no VARCHAR(255) NOT NULL
);

CREATE TABLE owner (
    owner_id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL
);

CREATE TABLE insurance_policy (
    policy_no VARCHAR(50) PRIMARY KEY,
    car_id INT NOT NULL,
    owner_id INT NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    FOREIGN KEY (car_id) REFERENCES car(car_id),
    FOREIGN KEY (owner_id) REFERENCES owner(owner_id)
);

CREATE TABLE claim (
    claim_id INT PRIMARY KEY,
    policy_no VARCHAR(50) NOT NULL,
    workshop_id INT NOT NULL,
    driver_name VARCHAR(255) NOT NULL,
    claim_date DATE NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (policy_no) REFERENCES insurance_policy(policy_no),
    FOREIGN KEY (workshop_id) REFERENCES workshop(workshop_id)
);

CREATE TABLE workshop (
    workshop_id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL
);
