export const Lion = function ({ size }: { size: number }) {
  return (
    <img
      width={size}
      height={size}
      src="data:image/gif;base64,R0lGODlhMgAyAMQaAOHJilofAHtnMQAAAGglAYsxAEwaAGEiAJAzAFAjC5Q0AJU0AE8cAHsrAFUdAJk2AEocA7pQF9J9UaNjMsOra//oqZ03AHwrAEgZAFsfAP///wAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Njk3QUM5RDgyMDIyMTFFREI2QTVCQjJBNjhFNkYzNUQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Njk3QUM5RDkyMDIyMTFFREI2QTVCQjJBNjhFNkYzNUQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2OTdBQzlENjIwMjIxMUVEQjZBNUJCMkE2OEU2RjM1RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2OTdBQzlENzIwMjIxMUVEQjZBNUJCMkE2OEU2RjM1RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0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
"
    />
  );
};