'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-28 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-1910';
    this._commitGIT = 'b56dc5225b3b2697de79791e3b8d9cf81e9cdea0';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}