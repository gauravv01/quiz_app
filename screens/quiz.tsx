import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Quiz = ({navigation}) => {
    const [questions, setQuestions] = useState();
    const [ques, setQues] = useState(0);
    const [score, setScore] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState([]);
    const getQuiz=async()=>{
        setIsLoading(true);
        const url = 'https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986';
        const res = await fetch(url);
        const data = await res.json();
        setQuestions(data.results);
        setOptions(generateOptionsAndShuffle(data.results[0]));
        setIsLoading(false);
    };
    useEffect(() =>{
        getQuiz();
    }, []);

    const shuffleArray=(array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    const generateOptionsAndShuffle=(_question)=> {
        const option = [..._question.incorrect_answers];
        option.push(_question.correct_answer);
        shuffleArray(option);
        return option;
    }

    const handleNext=()=> {
        setQues(ques + 1);
        setOptions(generateOptionsAndShuffle(questions[ques+1]));
    }
    const handleShowResult=()=> {
        navigation.navigate('Result', {
            score: score
        });
    }
    const handleSelectedOption=(_option)=> {
        if (_option===questions[ques].correct_answer) {
            setScore(score + 10);
        }
        if (ques !== 9) {
            setQues(ques + 1);
            setOptions(generateOptionsAndShuffle(questions[ques+1]));
        }
        if (ques === 9) {
            handleShowResult();
        }
    }
    return (
    <View style={styles.container}>
        {isLoading ? <View><Text>Loading...</Text></View> : questions && (
            <View style={styles.parent}>
                <View style={styles.top}>
                    <Text style={styles.questions}>Q.  { decodeURIComponent(questions[ques].question) }</Text>
                </View>
                <View style={styles.options}>
                    <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectedOption(options[0])}>
                        <Text style={styles.option}>{decodeURIComponent(options[0])}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectedOption(options[1])}>
                        <Text style={styles.option}>{decodeURIComponent(options[1])}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectedOption(options[2])}>
                        <Text style={styles.option}>{decodeURIComponent(options[2])}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectedOption(options[3])}>
                        <Text style={styles.option}>{decodeURIComponent(options[3])}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottom}>
                    {ques !== 9 && (
                        <TouchableOpacity style={styles.button} onPress={handleNext}>
                            <Text style={styles.buttonText}>SkIP</Text>
                        </TouchableOpacity>
                    )}
                    {ques === 9 && (
                        <TouchableOpacity style={styles.button} onPress={handleShowResult}>
                            <Text style={styles.buttonText}>Show Result</Text>
                        </TouchableOpacity>
                    )}
                    
                </View>
            </View>
        )}
    </View>
  )
}

export default Quiz

const styles = StyleSheet.create({
    bottom: {
        marginBottom: 12,
        paddingVertical: 16,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    button: {
        backgroundColor: '#184E77',
        padding: 12,
        paddingHorizontal: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30,
      },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
    },
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%'
    },
    options: {
        marginVertical: 16,
        flex: 1,
    },
    option: {
        fontSize: 18,
        fontWeight: '500',
        color: 'white',
    },
    optionButton: {
        paddingVertical: 12,
        marginVertical: 6,
        backgroundColor: '#34A0A4',
        paddingHorizontal: 12,
        borderRadius: 12,
    },
    parent: {
        height: '100%',
    },
    questions: {
        fontSize: 28,
    },
    top: {
        marginVertical: 16
    },
})