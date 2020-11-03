'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-03 12:00:08';
    this._versionBuild = 'jenkins-Bricolage-2052';
    this._commitGIT = 'bd8c1a913308abe786970cf0b403cba10f5a4bd0';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}