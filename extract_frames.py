import cv2
import os

cap = cv2.VideoCapture('pin_video.mp4')
fps = cap.get(cv2.CAP_PROP_FPS)
total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
duration = total_frames / fps if fps > 0 else 0
print(f"FPS: {fps}, Total Frames: {total_frames}, Duration: {duration:.2f}s")

# Extract 5 sample frames throughout the video
sample_indices = [int(total_frames * i / 6) for i in range(1, 6)]
for i, f_idx in enumerate(sample_indices):
    cap.set(cv2.CAP_PROP_POS_FRAMES, f_idx)
    ret, frame = cap.read()
    if ret:
        out_name = f"pin_frame_{i+1}.jpg"
        cv2.imwrite(out_name, frame)
        print(f"Saved {out_name} (frame {f_idx})")
cap.release()
