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
    this.freelancerName = freelancerName
    this.projectDetails = projectDetails
    this.logs = logs
}
       
TimeLog.prototype.calculateTotalEarning = function(){
    return this.ear

    }



//You are developing a startup’s order management system where an Order 
// constructor function should contain customer (object with name and 
// email), items (array of objects with productName, quantity, and 
// unitPrice), and status (string), then implement prototype methods 
// to compute total cost, update order status based on payment, and 
// categorize order urgency using switch and conditional statements.