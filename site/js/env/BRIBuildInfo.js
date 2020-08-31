'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-31 12:00:08';
    this._versionBuild = 'jenkins-Bricolage-1796';
    this._commitGIT = 'd342fc7cec02f376ab29d0c558de8052800262a6';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}