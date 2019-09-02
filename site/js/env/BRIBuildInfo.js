'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-02 16:00:04';
    this._versionBuild = 'jenkins-Bricolage-341';
    this._commitGIT = 'a4b5b49ed596bd3a558ff4eaaa8c68f4a6f3ffec';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}