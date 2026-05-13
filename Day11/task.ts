////////////////////////////////////////////////////////////////////////
// Question 1: The Generic API Wrapper
////////////////////////////////////////////////////////////////////////




// async function fetchData<T>(url: string): Promise<T> {
//   const response = await fetch(url);

//   if (!response.ok) {
//     throw new Error(`HTTP error! Status: ${response.status}`);
//   }

//   const data: T = await response.json();
//   return data;
// }



// interface Album {
//   userId: number;
//   id: number;
//   title: string;
// }

// // Testing the generic function
// async function getAlbum() {
//   try {
//     const album = await fetchData<Album>(
//       "https://jsonplaceholder.typicode.com/albums/1"
//     );

//     console.log(album);
//     console.log(album.title);
//   } catch (error) {
//     console.error("Error fetching album:", error);
//   }
// }

// getAlbum();



////////////////////////////////////////////////////////////////////////
// Question 2: Record Mapping for Configuration
////////////////////////////////////////////////////////////////////////


// enum Role {
//   Admin = "Admin",
//   Editor = "Editor",
//   Guest = "Guest",
// }

// const PermissionMap: Record<Role, boolean> = {
//   [Role.Admin]: true,
//   [Role.Editor]: true,
//   [Role.Guest]: false,
// };

// console.log(PermissionMap);
// console.log(PermissionMap[Role.Admin]);


////////////////////////////////////////////////////////////////////////
// Question 3:  Exhaustiveness Checking (The never Type)
////////////////////////////////////////////////////////////////////////

// type TaskStatus = "Open" | "InProgress" | "Closed";

// function handleTask(status: TaskStatus): string {
//   switch (status) {
//     case "Open":
//       return "Task is open";

//     case "InProgress":
//       return "Task is in progress";

//     case "Closed":
//       return "Task is closed";

//     default:
//       const exhaustiveCheck: never = status;
//       return exhaustiveCheck;
//   }
// }

// console.log(handleTask("Open"));
// console.log(handleTask("InProgress"));
// console.log(handleTask("Closed"));

////////////////////////////////////////////////////////////////////////
// Question 4:  Recursive Navigation Type
////////////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////////////
// Question 5:  Template Literal Types for CSS
////////////////////////////////////////////////////////////////////////


// type Unit = "px" | "rem" | "vh";

// type MarginValue = `${number}${Unit}`;

// let margin1: MarginValue = "10px";
// let margin2: MarginValue = "2rem";
// let margin3: MarginValue = "50vh";

// console.log(margin1);
// console.log(margin2);
// console.log(margin3);


////////////////////////////////////////////////////////////////////////
// Question 6:  Conditional Types & the infer Keyword
////////////////////////////////////////////////////////////////////////


// type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

// type Result1 = UnwrapPromise<Promise<string>>;
// type Result2 = UnwrapPromise<Promise<number>>;
// type Result3 = UnwrapPromise<boolean>;

// let value1: Result1 = "Hello";
// let value2: Result2 = 100;
// let value3: Result3 = true;

// console.log(value1);
// console.log(value2);
// console.log(value3);

////////////////////////////////////////////////////////////////////////
// Question 7:  The Union Manipulation Puzzle
////////////////////////////////////////////////////////////////////////

// type AllEvents = "click" | "dbclick" | "submit" | "reset" | "keypress";

// type MouseEvents = Extract<AllEvents, "click" | "dbclick">;

// type NonFormEvents = Exclude<AllEvents, "submit" | "reset">;

// let event1: MouseEvents = "click";
// let event2: MouseEvents = "dbclick";

// let event3: NonFormEvents = "click";
// let event4: NonFormEvents = "dbclick";
// let event5: NonFormEvents = "keypress";

// console.log(event1);
// console.log(event2);
// console.log(event3);
// console.log(event4);
// console.log(event5);


////////////////////////////////////////////////////////////////////////
// Question 8:  Async Higher-Order Function (HOF)
////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////
// Question 9:  Index Signatures for Dynamic Metadata
////////////////////////////////////////////////////////////////////////


// interface UserMetadata {
//   createdAt: Date;
//   [key: string]: string | number | boolean | Date;
// }

// const user: UserMetadata = {
//   createdAt: new Date(),
//   username: "Hemraj",
//   age: 22,
//   isActive: true,
// };

// console.log(user);


////////////////////////////////////////////////////////////////////////
// Question 10:  Mapped Types with Key Remapping
////////////////////////////////////////////////////////////////////////


interface Car {
  make: string;
  model: string;
}

type ApiResponse<T> = {
  [K in keyof T as `DATA_${Uppercase<string & K>}`]: T[K];
};

type CarApiResponse = ApiResponse<Car>;

const carData: CarApiResponse = {
  DATA_MAKE: "Toyota",
  DATA_MODEL: "Fortuner",
};

console.log(carData);