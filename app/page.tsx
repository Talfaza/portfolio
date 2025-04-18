"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type CommandType = {
  command: string
  output: React.ReactNode
}

export default function Terminal() {
  const [input, setInput] = useState("")
  const [commandHistory, setCommandHistory] = useState<CommandType[]>([])
  const [historyIndex, setHistoryIndex] = useState(0)
  const [inputHistory, setInputHistory] = useState<string[]>([])

  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  // Auto-focus the input field and scroll to bottom when commands are added
  useEffect(() => {
    inputRef.current?.focus()
    terminalRef.current?.scrollTo(0, terminalRef.current.scrollHeight)
  }, [commandHistory])

  // Handle clicks on the terminal to focus the input
  const handleTerminalClick = () => {
    inputRef.current?.focus()
  }

  // Process the entered command
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim()) return

    // Add command to history
    const newInputHistory = [...inputHistory, input]
    setInputHistory(newInputHistory)
    setHistoryIndex(newInputHistory.length)

    // Process command
    const output = processCommand(input.trim())

    setCommandHistory([...commandHistory, { command: input, output }])
    setInput("")
  }

  // Handle keyboard navigation through command history
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInput(inputHistory[newIndex])
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex < inputHistory.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setInput(inputHistory[newIndex])
      } else {
        setHistoryIndex(inputHistory.length)
        setInput("")
      }
    } else if (e.key === "Tab") {
      e.preventDefault()
      handleTabCompletion()
    }
  }

  // Simple tab completion
  const handleTabCompletion = () => {
    const commands = ["help", "about", "projects", "socials", "skills", "contact", "clear", "ls", "cat", "echo"]
    const matchingCommands = commands.filter((cmd) => cmd.startsWith(input))

    if (matchingCommands.length === 1) {
      setInput(matchingCommands[0])
    }
  }

  // Process different commands
  const processCommand = (cmd: string): React.ReactNode => {
    const command = cmd.toLowerCase()
    const args = command.split(" ")

    switch (args[0]) {
      case "help":
        return (
          <div className="py-2">
            <p className="text-green-400 font-bold">Available commands:</p>
            <ul className="pl-4">
              <li>
                <span className="text-yellow-300">about</span> - Display information about me
              </li>
              <li>
                <span className="text-yellow-300">projects</span> - View my projects
              </li>
              <li>
                <span className="text-yellow-300">socials</span> - Display my social media links
              </li>
              <li>
                <span className="text-yellow-300">skills</span> - List my technical skills
              </li>
              <li>
                <span className="text-yellow-300">contact</span> - How to get in touch with me
              </li>
              <li>
                <span className="text-yellow-300">clear</span> - Clear the terminal
              </li>
              <li>
                <span className="text-yellow-300">ls</span> - List directory contents
              </li>
              <li>
                <span className="text-yellow-300">cat [file]</span> - Display file contents
              </li>
              <li>
                <span className="text-yellow-300">echo [text]</span> - Display a line of text
              </li>
            </ul>
          </div>
        )

      case "about":
        return (
          <div className="py-2">
            <p className="text-green-400 font-bold">About Me:</p>
            <p>I'm a passionate developer with a love for creating innovative solutions.</p>
            <p>Currently working on web development and open-source projects.</p>
            <p>
              Type <span className="text-yellow-300">contact</span> to learn how to get in touch with me.
            </p>
          </div>
        )

      case "projects":
        return (
          <div className="py-2">
            <p className="text-green-400 font-bold">My Projects:</p>
            <ul className="pl-4">
              <li>
                <span className="text-yellow-300">Portfolio Terminal</span> - This interactive terminal-like portfolio
                website
              </li>
              <li>
                <span className="text-yellow-300">E-commerce Platform</span> - A full-stack e-commerce solution built
                with Next.js and Stripe
              </li>
              <li>
                <span className="text-yellow-300">Weather App</span> - Real-time weather application using OpenWeather
                API
              </li>
              <li>
                <span className="text-yellow-300">Task Manager</span> - A productivity tool built with React and
                Firebase
              </li>
            </ul>
            <p className="mt-2">
              For more details, visit my GitHub profile with the <span className="text-yellow-300">socials</span>{" "}
              command.
            </p>
          </div>
        )

      case "socials":
        return (
          <div className="py-2">
            <p className="text-green-400 font-bold">My Social Links:</p>
            <ul className="pl-4">
              <li>
                <span className="text-yellow-300">GitHub:</span>{" "}
                <a
                  href="https://github.com/username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline"
                >
                  github.com/username
                </a>
              </li>
              <li>
                <span className="text-yellow-300">LinkedIn:</span>{" "}
                <a
                  href="https://linkedin.com/in/username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline"
                >
                  linkedin.com/in/username
                </a>
              </li>
              <li>
                <span className="text-yellow-300">Twitter:</span>{" "}
                <a
                  href="https://twitter.com/username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline"
                >
                  twitter.com/username
                </a>
              </li>
              <li>
                <span className="text-yellow-300">Portfolio:</span>{" "}
                <a
                  href="https://portfolio.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline"
                >
                  portfolio.com
                </a>
              </li>
            </ul>
          </div>
        )

      case "skills":
        return (
          <div className="py-2">
            <p className="text-green-400 font-bold">Technical Skills:</p>
            <div className="grid grid-cols-2 gap-x-4 pl-4">
              <div>
                <p className="text-yellow-300">Languages:</p>
                <ul className="pl-4">
                  <li>JavaScript/TypeScript</li>
                  <li>Python</li>
                  <li>HTML/CSS</li>
                  <li>SQL</li>
                </ul>
              </div>
              <div>
                <p className="text-yellow-300">Frameworks:</p>
                <ul className="pl-4">
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Node.js</li>
                  <li>Express</li>
                </ul>
              </div>
              <div className="mt-2">
                <p className="text-yellow-300">Tools:</p>
                <ul className="pl-4">
                  <li>Git</li>
                  <li>Docker</li>
                  <li>AWS</li>
                  <li>Figma</li>
                </ul>
              </div>
              <div className="mt-2">
                <p className="text-yellow-300">Other:</p>
                <ul className="pl-4">
                  <li>RESTful APIs</li>
                  <li>GraphQL</li>
                  <li>CI/CD</li>
                  <li>Agile/Scrum</li>
                </ul>
              </div>
            </div>
          </div>
        )

      case "contact":
        return (
          <div className="py-2">
            <p className="text-green-400 font-bold">Contact Information:</p>
            <p>
              <span className="text-yellow-300">Email:</span> contact@example.com
            </p>
            <p>
              <span className="text-yellow-300">LinkedIn:</span>{" "}
              <a
                href="https://linkedin.com/in/username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                linkedin.com/in/username
              </a>
            </p>
            <p className="mt-2">Feel free to reach out for collaboration opportunities or just to say hello!</p>
          </div>
        )

      case "clear":
        // Clear the terminal
        setTimeout(() => {
          setCommandHistory([])
        }, 0)
        return null

      case "ls":
        return (
          <div className="py-2">
            <div className="grid grid-cols-4 gap-x-4">
              <span className="text-blue-400">about.txt</span>
              <span className="text-blue-400">projects.txt</span>
              <span className="text-blue-400">skills.txt</span>
              <span className="text-blue-400">contact.txt</span>
              <span className="text-green-400">socials/</span>
              <span className="text-yellow-300">resume.pdf</span>
            </div>
          </div>
        )

      case "cat":
        if (!args[1]) {
          return <p className="text-red-400">Usage: cat [filename]</p>
        }

        switch (args[1]) {
          case "about.txt":
            return processCommand("about")
          case "projects.txt":
            return processCommand("projects")
          case "skills.txt":
            return processCommand("skills")
          case "contact.txt":
            return processCommand("contact")
          default:
            return <p className="text-red-400">File not found: {args[1]}</p>
        }

      case "echo":
        const message = args.slice(1).join(" ")
        return message ? <p>{message}</p> : <p></p>

      default:
        return (
          <p className="text-red-400">Command not found: {command}. Type &apos;help&apos; to see available commands.</p>
        )
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-200 p-4 font-mono">
      <div className="mb-4">
        <pre className="text-green-400">
          {`
 _____           _           _   _       
|  _  |___ ___ _| |___ ___ _| |_|_|___   
|   __|  _| . | . | . |  _| . | | | . |  
|__|  |_| |___|___|___|_| |___|_|_|___|  
                                         
`}
        </pre>
        <p>Welcome to my interactive terminal portfolio!</p>
        <p>
          Type <span className="text-yellow-300">help</span> to see available commands.
        </p>
      </div>

      {/* Command history */}
      {commandHistory.map((item, index) => (
        <div key={index} className="mb-2">
          <div className="flex items-center">
            <span className="text-green-400">visitor@portfolio:</span>
            <span className="text-blue-400">~$</span>
            <span className="ml-2">{item.command}</span>
          </div>
          <div className="ml-4">{item.output}</div>
        </div>
      ))}

      {/* Current command input */}
      <form onSubmit={handleSubmit} className="flex items-center">
        <span className="text-green-400">visitor@portfolio:</span>
        <span className="text-blue-400">~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className={cn(
            "ml-2 bg-transparent outline-none caret-white flex-1",
            "focus:outline-none focus:ring-0 border-none p-0",
          )}
          autoFocus
        />
      </form>
    </div>
  )
}
