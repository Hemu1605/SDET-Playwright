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

type TaskStatus = "Open" | "InProgress" | "Closed";

function handleTask(status: TaskStatus): string {
  switch (status) {
    case "Open":
      return "Task is open";

    case "InProgress":
      return "Task is in progress";

    case "Closed":
      return "Task is closed";

    default:
      const exhaustiveCheck: never = status;
      return exhaustiveCheck;
  }
}

console.log(handleTask("Open"));
console.log(handleTask("InProgress"));
console.log(handleTask("Closed"));

////////////////////////////////////////////////////////////////////////
// Question 4:  Recursive Navigation Type
////////////////////////////////////////////////////////////////////////


type FolderNode = {
  name: string;
  files?: string[];
  subFolders?: FolderNode[];
};

const myFolder: FolderNode = {
  name: "Root",
  files: ["index.html", "style.css"],
  subFolders: [
    {
      name: "Images",
      files: ["logo.png", "banner.jpg"],
    },
    {
      name: "Scripts",
      files: ["app.js"],
      subFolders: [
        {
          name: "Utils",
          files: ["helper.js"],
        },
      ],
    },
  ],
};

console.log(myFolder);


////////////////////////////////////////////////////////////////////////
// Question 5:  Template Literal Types for CSS
////////////////////////////////////////////////////////////////////////


type Unit = "px" | "rem" | "vh";

type MarginValue = `${number}${Unit}`;

let margin1: MarginValue = "10px";
let margin2: MarginValue = "2rem";
let margin3: MarginValue = "50vh";

console.log(margin1);
console.log(margin2);
console.log(margin3);