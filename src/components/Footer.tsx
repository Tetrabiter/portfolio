import { FaGithub, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="w-full border-t border-border py-6 px-4 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
      
      {/* Социальные иконки */}
      <div className="flex gap-4 mb-4 md:mb-0">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors"
        >
          <FaLinkedin size={20} />
        </a>
      </div>

      {/* Инфо */}
      <div className="text-center md:text-right">
        <p>
          © {new Date().getFullYear()} Tim. Made with ❤️ using React & Shadcn.
        </p>
      </div>
    </footer>
  )
}

export default Footer
