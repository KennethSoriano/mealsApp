import { Text } from "react-native";
import { MEALS } from "../data/dummy-data";

function MealDetailScreen({route, navigation}) {
    const mealId = route.params.mealId;

    return (
        <>
            <Text>{mealId}</Text>
        </>
    )
}

export default MealDetailScreen;