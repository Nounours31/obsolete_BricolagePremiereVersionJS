'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-30 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-2035';
    this._commitGIT = '49005cd35ab4fb4a8d7cd6bba530bd4062f0b14c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}