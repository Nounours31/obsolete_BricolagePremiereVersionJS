'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-25 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1648';
    this._commitGIT = 'f57658a3a96ce9df3eeac37c64a19cbe21c0c77c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}