function Footer() {
  return (
    <footer className="border-t border-gray-300 py-5 text-center">
      <div className="author text-gray-600">
        <p className="flex flex-row justify-center gap-4">
          {/* TODO - make this thing a link */}
          <span>ashenafi.debella101@gmail.com</span>
          <div className="border border-gray-600"></div>
          <span>+2519 60-16-11-07</span>
          <div className="border border-gray-600"></div>
          <span>Addis Ababa, Ethiopia</span>
        </p>
        <p className="mt-2">
          Made with{" "}
          <span>
            <i class="bi bi-heart-fill text-red-600"></i>
          </span>{" "}
          by ashenafiDL
        </p>
      </div>
    </footer>
  );
}

export default Footer;
