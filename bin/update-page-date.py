import argparse
import re


def update_page(filepath: str, datetime: str):
    """Updates the 'updated' field in a file to a new datetime.

    This function reads the specified file, searches for a 'updated' field
    in the format: 'date: YYYY-MM-DDTHH:MM:SSZ', and replaces the content
    of the 'updated' field with the provided new value.
    The updated content is then written back to the file.

    Parameters
    ----------
    filepath : `str`
        Path to the file to be updated.

    datetime : `str`
        New datetime string in 'YYYY-MM-DDTHH:MM:SSZ' format
        to replace the existing updated date.

    Raises
    ------
    FileNotFoundError
        If the specified file does not exist.

    IOError
        If there is an error reading or writing the file.

    ValueError
        If the 'updated' field is not found in the file.
    """
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    if not re.search(r'updated:\s*\d{4}-\d{2}-\d{2}T[^\n]+Z', content):
        raise ValueError(f"'updated' field not found in {filepath}")

    updated_content = re.sub(
        r'(updated:\s*)(\d{4}-\d{2}-\d{2}T[^\n]+)',
        lambda m: f"{m.group(1)}{datetime}",
        content,
        count=1
    )

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(updated_content)


def get_today_datetime() -> str:
    """Get today's date in 'YYYY-MM-DDTHH:MM:SSZ' (UTC) format."""
    from datetime import datetime, timezone
    dt = datetime.now(timezone.utc)
    return dt.strftime('%Y-%m-%dT%H:%M:%SZ')


def main():
    parser = argparse.ArgumentParser(
        description="Update the 'updated' field in a specified Markdown file."
    )
    parser.add_argument(
        "file",
        help="path to the Markdown file to update"
    )
    parser.add_argument(
        "--date",
        default=get_today_datetime(),
        help="new date value in 'YYYY-MM-DDTHH:MM:SSZ' format (default: today)"
    )
    args = parser.parse_args()

    update_page(args.file, args.date)
    print(f"Updated 'updated' field in {args.file} to {args.date}")


if __name__ == "__main__":
    main()
