import React, { useState } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { useRouter } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'

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
    <LinearGradient
      colors={['#0F2BAC', '#22006C']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}>
      <Text style={styles.title}>Tes Gaya Belajar VAK</Text>
      <Text style={styles.question}>
        {questions[currentQuestion].id}
        {'. '}
        {questions[currentQuestion].question}
      </Text>
      {questions[currentQuestion].answers.map((answer, index) => (
        <TouchableOpacity
          key={index}
          style={styles.answerButton}
          onPress={() => handleAnswer(answer.id)}>
          <Text style={styles.answerText}>{answer.text}</Text>
        </TouchableOpacity>
      ))}
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#012060',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 32,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  question: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  answerButton: {
    backgroundColor: '#FFD700',
    padding: 10,
    marginVertical: 5,
    borderRadius: 25,
    width: '80%',
  },
  answerText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
})
