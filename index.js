//You are building a feature rollout system for a startup where a FeatureToggle 
// constructor function has properties: featureName (string), isEnabled (boolean), 
// and userGroupAccess (array of strings like "betaTesters", "admins"), and you 
// must use a prototype method canAccess(userRole) to return true or false, a 
// method toggleFeature(flag) to enable or disable the feature, and simulate 
// access attempts using if-else and switch statements for different roles.
function FeatureToggle (featureName, isEnabled, userGroupAccess) {
    this.featureName = featureName
    this.isEnabled = isEnabled
    this.userGroupAccess = userGroupAccess  
}
FeatureToggle.prototype.canAccess = function (userRole){
  if(!this.isEnabled)return false;
 
  return this.userGroupAccess.includes(userRole)  
}
FeatureToggle.prototype.ToggleFeature = function(flag){
this.isEnabled = flag
}
const feature = new FeatureToggle("Dark Mode", true,["betaTesters", "Admin"])

const role = ["admin", "betaTester"]
roles = role.forEach((roles)=>{
switch (roles){
    case "admin":
        console.log(`${role} access`)
        break
    case "beta":
        console.log(`${role} role access`)
        break;
    default: console.log(`denied access`)
};
});
console.log(feature.canAccess())
console.log(feature.ToggleFeature())
console.log(feature.canAccess());






//In a freelancer time-tracking platform, create a TimeLog constructor
// function with properties: freelancerName (string), projectDetails 
// (object with name and hourlyRate), and logs (array of objects with 
// date, hoursWorked), then add prototype methods to calculate total
//  earnings, filter logs by date range, and determine if weekly 
// hours exceed 40 using if-else logic.

function TimeLog(freelancerName, projectDetails, logs){
    this.freelancerName = freelancerName;
    this.projectDetails = projectDetails;
    this.logs = logs;
}
       
TimeLog.prototype.calculateTotalEarning = function(){
    return this.logs.reduce((sum, log)=>sum + (
        log.hoursWorked*this.projectDetails.hourslyRate),0);
};
TimeLog.prototype.logsByDate= function(startDate, endDate){
    return this.logs.filter(log => this.logs.date>=startDate && log.date<= endDate);
};

TimeLog.prototype.exceedWeekLimit= function (){
    const weeklyHours =this.logs.reduce((sum, log)=> sum + log.hoursWorked, 0)
    return weeklyHours >40;
};

const logs = [{date: "2025-03-03", hoursWorked:8},
            {date: "2025-05-03", hoursWorked:10},
            {date: "2025-07-03", hoursWorked:30}
];
const timeLog = new TimeLog("Faith", {name: "Website", hourslyRate:20},logs)
console.log("Earnings:", timeLog.calculateTotalEarning())
console.log("Overtime:",timeLog.exceedWeekLimit())




//You are developing a startup’s order management system where an Order 
// constructor function should contain customer (object with name and 
// email), items (array of objects with productName, quantity, and 
// unitPrice), and status (string), then implement prototype methods 
// to compute total cost, update order status based on payment, and 
// categorize order urgency using switch and conditional statements.
function Order(customer,items,status){
    this.customer = customer,
    this.items = items,
    this.status = status
}
Order.prototype.totalCost = function(){
    return this.items.reduce((total, item)=> total + (item.unitPrice * this.quantity),0)
}
Order.prototype.updateOrderStatus = function(paymentRecieved){
    this.status = paymentRecieved ? "Paid" : "Pending"; 

};
Order.prototype.urgency = function(){
    switch(this.status){
        case "Pending":
            return "High"
        case "Paid":
            return "Low"
        default:
            return "Unknown"
    };
};
const John = new Order({name: "John",email: "john@gmail.com"},
                        [{productName:"Soap",quantity: 5,unitPrice: 75.50},
                            {productName:"Tissue",quantity: 12,unitPrice: 40.00},
                            {productName:"Wipes",quantity: 2,unitPrice: 150.00}],"Pending")

console.log(John.totalCost())
console.log(John.urgency())
console.log(John.updateOrderStatus("Pending"))

// Build a simple e-learning system where a Course class has properties: 
// title (string), instructor (object with name and expertise), and students 
// (array of objects with name and completionStatus), then add prototype 
// methods to return names of students who completed the course, count 
// enrolled students by expertise area, and use control flow to output 
// different messages for instructors with more or less than 5 students.


