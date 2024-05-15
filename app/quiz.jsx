import React, { useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'

import { questions } from '../constants/Questions'

export default function QuizScreen() {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState([])

  const handleAnswer = (answerId) => {
    setAnswers([...answers, answerId])

    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      // Calculate the result
      const result = calculateResult(answers)
      router.push(`/result?result=${result}`)
    }
  }

  const calculateResult = (answers) => {
    const count = { a: 0, b: 0, c: 0 }

    answers.forEach((answer) => {
      count[answer] += 1
    })

    if (count.a >= count.b && count.a >= count.c) {
      return 'Visual'
    } else if (count.b >= count.a && count.b >= count.c) {
      return 'Auditory'
    } else {
      return 'Kinesthetic'
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.question}>
        {questions[currentQuestion].question}
      </Text>
      {questions[currentQuestion].answers.map((answer, index) => (
        <Button
          key={index}
          title={answer.text}
          onPress={() => handleAnswer(answer.id)}
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  question: {
    fontSize: 18,
    marginBottom: 20,
  },
})
