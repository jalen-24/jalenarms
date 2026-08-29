export const downloadResume = async () => {
    const link = document.createElement("a");
    link.href = "/Jalen Arms - Resume.pdf";
    link.download = "Jalen Arms - Resume.pdf"; // Suggested filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
