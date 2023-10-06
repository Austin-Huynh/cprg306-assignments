"use client";

export default function Page() {
    let dogList = [
        {
            id: 1,
            name: "Sleepy dog",
            description: "This dog is sleepy",
            imageUrl: "https://images.pexels.com/photos/2248516/pexels-photo-2248516.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&dpr=2"
        },
        {
            id: 2,
            name: "Free Kisses",
            description: "I will give free kisses",
            imageUrl: "https://images.pexels.com/photos/4587971/pexels-photo-4587971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            id: 3,
            name: "Super sleepy",
            description: "I am super sleepy",
            imageUrl: "https://images.pexels.com/photos/3433366/pexels-photo-3433366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },



    ];

    dogList.sort((a, b) => a.name.localeCompare(b.name));

    dogList = dogList.filter((dog) => dog.id !== 2);

    const handleClick = (id) => {
        //alert(e.target.innerText)
        alert(id);
    };


    return <main>
        <ul>
            {
            dogList.map((dog) => (
                <li key={dog.id} onClick={() => 
                handleClick(dog.id)}>
                    <h2>{dog.name}</h2>
                    <p>{dog.description}</p>
                    <img src={dog.imageUrl} alt={dog.name} />
                </li>
            )) }
        </ul>
    </main>;
}