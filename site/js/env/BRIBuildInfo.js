'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-21 16:00:04';
    this._versionBuild = 'jenkins-Bricolage-1145';
    this._commitGIT = 'dc91f6935a02690801ad9ccc62b5eb4a5b4a50b2';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}