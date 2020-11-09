'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-09 20:00:09';
    this._versionBuild = 'jenkins-Bricolage-2078';
    this._commitGIT = 'a5986a86f3ba0abcb569caf53c67c0c2332d9a50';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}