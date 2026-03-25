import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import Array "mo:core/Array";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Map "mo:core/Map";
import Order "mo:core/Order";

actor {
  type Message = {
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    timestamp : Int;
  };

  module Message {
    public func compareByTimestamp(message1 : Message, message2 : Message) : Order.Order {
      Int.compare(message2.timestamp, message1.timestamp);
    };
  };

  let submissionMap = Map.empty<Text, Message>();

  public shared ({ caller }) func submitForm(name : Text, email : Text, phone : Text, message : Text) : async () {
    let timestamp = Time.now();
    let newMessage : Message = {
      name;
      email;
      phone;
      message;
      timestamp;
    };
    if (runtime.isEmpty(name)) { Runtime.trap("Name cannot be empty") };
    if (runtime.isEmpty(message)) { Runtime.trap("Message cannot be empty") };
    submissionMap.add(timestamp.toText(), newMessage);
  };

  public query ({ caller }) func getAllSubmissions() : async [Message] {
    submissionMap.values().toArray().sort(Message.compareByTimestamp);
  };

  module runtime {
    public func isEmpty(value : Text) : Bool {
      value.size() == 0;
    };
  };
};
