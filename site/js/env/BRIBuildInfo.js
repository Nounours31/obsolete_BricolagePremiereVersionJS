'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-01 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-1189';
    this._commitGIT = '5364ae1a7aaba6cb93e84594188fb47dff036610';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}