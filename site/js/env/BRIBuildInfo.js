'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-08 08:00:09';
    this._versionBuild = 'jenkins-Bricolage-1579';
    this._commitGIT = 'a67df64f6a0f17688e90726ad42929b937ec2252';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}