const Overview = () => {
  return (
    <div className="flex flex-row gap-4">
      <iframe
        className="w-[67%]"
        src="https://www.youtube.com/embed/hIo3lkALDlg?si=qPfNaq3LwfgUa9W7"
      ></iframe>
      <div className="w-[33%] flex flex-col gap-4">
        <iframe
          className="w-full"
          height="215"
          src="https://www.youtube.com/embed/gbgBs7dfJ-k?si=BQnxb1zkWqZbxjJD"
        ></iframe>
        <iframe
          className="w-full"
          height="215"
          src="https://www.youtube.com/embed/hVU9Jh_4gT4?si=RJ0zttm9nTPvcjUJ"
        ></iframe>
      </div>
    </div>
  );
};

export default Overview;
