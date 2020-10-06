'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-06 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1939';
    this._commitGIT = 'df590c8cef6b41e62384d933cb29a507ed68c13e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}