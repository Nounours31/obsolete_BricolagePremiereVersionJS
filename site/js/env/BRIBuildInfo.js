'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-25 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-796';
    this._commitGIT = '1b05fdb9e63284197539945678e072710bfea008';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}