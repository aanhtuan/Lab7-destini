import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Platform,
  StatusBar as RNStatusBar,
} from 'react-native';
import { INITIAL_STORY_ID } from './src/data/stories';
import { ChoiceButton } from './src/components/ChoiceButton';
import { getStoryNodeById, getEndingColor, getEndingLabel } from './src/utils/story';

export default function App() {
  const [currentId, setCurrentId] = useState<number>(INITIAL_STORY_ID);

  const currentNode = getStoryNodeById(currentId);

  const handleChoice = (nextId: number) => {
    setCurrentId(nextId);
  };

  const handleRestart = () => {
    setCurrentId(INITIAL_STORY_ID);
  };

  const isEnding = currentNode.isEnding;
  const endingColor = getEndingColor(currentNode.endingType);
  const endingLabel = getEndingLabel(currentNode.endingType);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.appTitle}>Destini</Text>
        <Text style={styles.appSubtitle}>Choose Your Own Adventure</Text>
      </View>

      {/* Story Narrative Card */}
      <View style={styles.cardWrapper}>
        <View style={styles.card}>
          {/* Chapter / Ending Badge */}
          <View style={styles.badgeContainer}>
            {isEnding ? (
              <View
                style={[
                  styles.endingBadge,
                  { backgroundColor: endingColor },
                ]}
              >
                <Text style={styles.endingBadgeText}>{endingLabel}</Text>
              </View>
            ) : (
              <View style={styles.chapterBadge}>
                <Text style={styles.chapterBadgeText}>CHAPTER {currentNode.id}</Text>
              </View>
            )}
          </View>

          {/* Node Title */}
          <Text style={styles.nodeTitle}>{currentNode.title}</Text>

          {/* Story Text Scrollable */}
          <ScrollView
            style={styles.scrollArea}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            <Text style={styles.storyText}>{currentNode.text}</Text>
          </ScrollView>
        </View>
      </View>

      {/* Choices or Restart Actions */}
      <View style={styles.actionsContainer}>
        {!isEnding ? (
          <>
            {currentNode.choice1 && (
              <ChoiceButton
                text={currentNode.choice1.text}
                variant="choice1"
                onPress={() => handleChoice(currentNode.choice1!.nextId)}
              />
            )}
            {currentNode.choice2 && (
              <ChoiceButton
                text={currentNode.choice2.text}
                variant="choice2"
                onPress={() => handleChoice(currentNode.choice2!.nextId)}
              />
            )}
          </>
        ) : (
          <ChoiceButton
            text="↻  RESTART STORY"
            variant="restart"
            onPress={handleRestart}
          />
        )}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.studentName}>Nguyễn Anh Tuấn - 23IT297</Text>
        <Text style={styles.studentClass}>Lớp: 23SE2 • Lab 07 - Destini</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A', // Slate-900
    paddingTop: Platform.OS === 'android' ? (RNStatusBar.currentHeight ?? 0) : 0,
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 6,
  },
  appTitle: {
    fontSize: 28,
    fontWeight: '900',
    color: '#F8FAFC',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  appSubtitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#38BDF8', // Sky-400
    marginTop: 2,
    letterSpacing: 0.5,
  },
  cardWrapper: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  card: {
    flex: 1,
    backgroundColor: '#1E293B',
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
    borderColor: '#334155',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 6,
  },
  badgeContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  chapterBadge: {
    backgroundColor: 'rgba(56, 189, 248, 0.15)',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(56, 189, 248, 0.3)',
  },
  chapterBadgeText: {
    color: '#38BDF8',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1,
  },
  endingBadge: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },
  endingBadgeText: {
    color: '#0F172A',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 1,
  },
  nodeTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#F1F5F9',
    textAlign: 'center',
    marginBottom: 16,
    letterSpacing: 0.5,
  },
  scrollArea: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  storyText: {
    fontSize: 18,
    lineHeight: 28,
    color: '#E2E8F0',
    textAlign: 'center',
    letterSpacing: 0.4,
  },
  actionsContainer: {
    paddingHorizontal: 20,
    paddingBottom: 6,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 14,
  },
  studentName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#E2E8F0',
    letterSpacing: 0.5,
  },
  studentClass: {
    fontSize: 12,
    fontWeight: '500',
    color: '#94A3B8',
    marginTop: 2,
  },
});
