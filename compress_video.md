# Video Compression Guide

## Using Online Tools (Easiest):
1. **Clipchamp** (Free, built into Windows 11): https://clipchamp.com/en/video-compressor/
2. **VideoSmaller**: https://www.videosmaller.com/
3. **FreeConvert**: https://www.freeconvert.com/video-compressor

Target: Under 100MB for GitHub

## Using FFmpeg (Best Quality):
```bash
# Install FFmpeg first: https://ffmpeg.org/download.html

# Compress to ~50MB (adjust -b:v value)
ffmpeg -i major_project.mp4 -vcodec h264 -acodec aac -b:v 1.5M -b:a 128k major_project_compressed.mp4

# Or more aggressive compression for smaller file
ffmpeg -i major_project.mp4 -vcodec h264 -acodec aac -b:v 1M -b:a 96k major_project_compressed.mp4
```

## Using HandBrake (User-Friendly):
1. Download: https://handbrake.fr/
2. Open your video
3. Preset: "Web" → "Gmail Large 3 Minutes 720p30"
4. Adjust quality slider to get under 100MB
5. Start encode
