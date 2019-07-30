'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-30 16:00:14';
    this._versionBuild = 'jenkins-Bricolage-205';
    this._commitGIT = '65a596aacc599306a80bd194e8f67330575a06f1';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}