from urllib.parse import urlparse


def detect_courier(url: str) -> str:
    url = url.lower()

    if "amazon" in url:
        return "Amazon Logistics"

    elif "flipkart" in url:
        return "Flipkart"

    elif "dhl" in url:
        return "DHL"

    elif "bluedart" in url:
        return "Blue Dart"

    elif "dtdc" in url:
        return "DTDC"

    elif "delhivery" in url:
        return "Delhivery"

    elif "fedex" in url:
        return "FedEx"

    elif "indiapost" in url:
        return "India Post"

    return "Unknown Courier"


def extract_tracking_id(url: str) -> str:
    """
    Temporary implementation.
    Next we'll extract real tracking IDs.
    """
    return "TM982731"