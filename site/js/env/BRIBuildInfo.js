'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-23 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-300';
    this._commitGIT = '45d20548b47baecde70dd8f3e13088eaa7d0451e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}