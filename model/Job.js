class Job {
    id;             // String
    type;           // enum: { "Transfer", "Return" }
    status;         // enum: { "Unstarted", "In transit", "Complete" }
    runnerId;       // String
    details;        // String
    dropOff;        // String
    pickUp;         // String
    items;          // List<(Drink, PairItem)>
}