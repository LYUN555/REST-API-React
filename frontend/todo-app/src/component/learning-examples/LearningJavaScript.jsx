const person ={
    name: 'Lyun555',
    address: {
        line1: 'Baker Street',
        city : 'London',
        country : 'UK',
    },
    profiles: ['twitter', 'linkedin', 'instargram'],
    printProfile: () =>{
        person.profiles.map(
            profiles => console.log(profiles)
        )
      
    }
}

export default function LearningJavaScript(){
    return(
        <>
        <div>{person.name}</div>
        <div>{person.address.line1}</div>
        <div>{person.address.city}</div>
        <div>{person.address.country}</div>
        <div>{person.profiles[2]}</div>
        <div>{person.printProfile()}</div>
        </>
    )
}