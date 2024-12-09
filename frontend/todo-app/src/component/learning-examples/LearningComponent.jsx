import FirstComponent, { FifthComponent } from'./FirstComponent';
import SecondComponent from './SecondComponent';
import ThirdComponenet from './ThirdComponent';
import FourthComponent from './FourthComponent';
import LearningJavaScript from './LearningJavaScript';

export default function LearningComponent() {
    return (
        <div className="App">
            <FirstComponent/>
            <SecondComponent/>
            <ThirdComponenet />
            <FourthComponent />
            <FifthComponent/>
            <LearningJavaScript/>
        </div>
    )

};
