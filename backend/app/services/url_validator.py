from urllib.parse import urlparse


SUPPORTED_DOMAINS = [
    "amazon",
    "flipkart",
    "dhl",
    "bluedart",
    "dtdc",
    "delhivery",
    "fedex",
    "indiapost",
]


def is_valid_tracking_url(url: str) -> bool:
    try:
        parsed = urlparse(url)

        if not parsed.scheme.startswith("http"):
            return False

        domain = parsed.netloc.lower()

        return any(site in domain for site in SUPPORTED_DOMAINS)

    except Exception:
        return False