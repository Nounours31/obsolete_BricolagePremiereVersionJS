'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-19 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-653';
    this._commitGIT = '89b64753620f35a7993d833da4ec2262ea146474';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}