'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-15 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1363';
    this._commitGIT = '942d5b5a7e955d841e3edaa18706731fe8826a5d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}