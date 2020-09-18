'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-18 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1867';
    this._commitGIT = '7b8c2103f327adf664b13dbbd4bacbf6e1cd236a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}